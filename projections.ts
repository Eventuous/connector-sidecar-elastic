import {PaymentRegistered, RoomBooked} from "./eventTypes";
import {Projector} from "./common";
import {index, update} from "./elasticProjectors";

export const projections: Projector = [
    index<RoomBooked>("V1.RoomBooked", event => ({
        id: event.bookingId,
        document: {
            roomId: event.roomId,
            guestId: event.guestId
        }
    })),
    update<PaymentRegistered>("V1.PaymentRegistered", event => ({
        id: event.bookingId,
        document: {outstandingAmount: event.amount}
    })),
];
