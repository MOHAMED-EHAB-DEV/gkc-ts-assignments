export class OrderNotification {
    sendNotification(userId: string, orderId: number) {
        setTimeout(() => {
            console.log(`order with id :${orderId} is bieng prepared for user ${userId}`);
        }, 500);
    }

    sendEmail(email: string, orderId: number) {
        setTimeout(() => {
            console.log(`order with id :${orderId} is bieng prepared for user ${email}`);
        }, 500);
    }
}