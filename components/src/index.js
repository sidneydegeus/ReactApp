import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail
                author="Sam"
                timeAgo="Today at 4:55PM"
                textContent="Hoi!"
                imgAvatar={faker.image.avatar()}
            />

            <CommentDetail
                author="Sam"
                timeAgo="Yesterday at 11:59AM"
                textContent="Lol"
                imgAvatar={faker.image.avatar()}
            />

            <CommentDetail
                author="Sam"
                timeAgo="Yesterday at 10:00AM"
                textContent="Nee"
                imgAvatar={faker.image.avatar()}
            />

            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    timeAgo="Today at 4:55PM"
                    textContent="Hoi!"
                    imgAvatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>

    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
