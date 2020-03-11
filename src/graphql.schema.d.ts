
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class MessageInput {
    id?: number;
    description?: string;
}

export class Message {
    id: number;
    description: string;
}

export abstract class IMutation {
    abstract createMessage(description: string): Message | Promise<Message>;
    abstract updateMessage(message?: MessageInput): Message | Promise<Message>;
    abstract deleteMessage(id: number): Message | Promise<Message>;
}

export abstract class IQuery {
    abstract messages(): Message[] | Promise<Message[]>;
    abstract message(id: number): Message | Promise<Message>;
}
