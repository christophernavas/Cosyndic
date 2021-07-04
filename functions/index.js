const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.createStripeCheckout = functions
    .https.onCall(async (data, context) => {
      const currentSite = functions.config().env.site;
      // Stripe Init
      const stripe = require("stripe")(functions.config().stripe.secret_key);
      const session = await stripe.checkout.session.create({
        payment_method_types: ["card"],
        line_items: [
          {
            price_data: {
              currency: "eu",
              product_data: {
                name: "Paiement des charges",
                // images: ['https://i.imgur.com/EHyR2nP.png'],
              },
              unit_amount: 2000,
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
