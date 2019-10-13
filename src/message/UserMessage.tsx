import UserMessageStatus from "./UserMessageStatus";

interface UserMessage {
    learningFrom?: Date;
    message: string;
    name: string;
    status: UserMessageStatus;
}

export default UserMessage;