import Stripe from 'stripe';

export const pay = async (req, res) => {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'INR',
                        product_data: {
                            name: req.body.name,//REQ FROM BODY
                        },
                        unit_amount: req.body.amount,//REQ FROM BODY
                    },
                    quantity: req.body.number//REQ FROM BODY
                }
            ],
            mode: 'payment',
            success_url: '',
            cancel_url: '',
        })

        res.json({ sessionId: session.id });
        
    } catch (error) {
        console.error('Error creating checkout session:', error);
        res.status(500).send({ error: 'Error creating checkout session' });
    }
}