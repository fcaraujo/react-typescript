import UserMessageStatus from "./UserMessageStatus";

interface UserMessage {
    learningFrom?: Date;
    message: string;
    readonly owner: string;
    status: UserMessageStatus;

    validation?: (aOptionalNumber?: number) => boolean;
    greet?: (recipient: string) => string;
}

export default UserMessage;