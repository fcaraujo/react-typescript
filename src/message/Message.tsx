import React from 'react';

import UserMessage from './UserMessage';
import UserMessageStatus from './UserMessageStatus';

const Message = (props: UserMessage): any => {
    const statusName = UserMessageStatus[props.status];

    let learningFrom = props.learningFrom;

    let startedAt = learningFrom !== undefined
        ? learningFrom.toUTCString()
        : null;

    return (
        <div className="message">
            <p>
                <strong>
                    Messages:
                </strong>
                <br/>

                Hi {props.owner},
                <br />

                Let's proudly: {props.message}
                <br />

                We're currently: {statusName}.

                <br />
                {startedAt
                    ? `We're learning since: ${startedAt}.`
                    : `There's no history of learning it before.`
                }
            </p>
        </div>
    );
}

export default Message;