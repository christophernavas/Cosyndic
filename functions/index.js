const functions = require("firebase-functions");

const admin = require("firebase-admin");

const serviceAccount = require("./credentials/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

exports.createStripeCheckout = functions
    .https.onCall(async (data, context) => {
      // Check if database exist
      if (!db) {
        return "Database not found";
      }

      // Check if userId is here
      const userId = data.userId;
      if (!userId) {
        return "Missing post user data";
      }

      // Create a ref from current user data
      const currentUser = await db.collection("users").doc(userId).get();

      // Check if user exist
      let currentUserData = undefined;
      if (!currentUser.exists) {
        return "No document";
      } else {
        currentUserData = currentUser.data();
      }

      const currentPayment = currentUserData.currentPayment;

      const currentSite = functions.config().env.site;
      // Stripe Init
      const stripe = require("stripe")(functions.config().stripe.secret);

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
          {
            price_data: {
              currency: "eur",
              product_data: {
                name: "Paiement des charges",
                // images: ['https://i.imgur.com/EHyR2nP.png'],
              },
              unit_amount: currentPayment,
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: `${currentSite}success.html`,
        cancel_url: `${currentSite}cancel.html`,
      });

      return {
        id: session.id,
      };
    });
