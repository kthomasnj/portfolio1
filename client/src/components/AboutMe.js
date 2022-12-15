import React from 'react';
import author from "../images/me.PNG";

const AboutMe = () => {
    return (
        <div id="about" className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap">
                        <img className="profile-img" src={author} alt="author..." />
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className='"about-heading'>About Me</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, consectetur? Sequi quia eveniet corporis vel quidem voluptatem. Voluptatibus sequi maxime dolorem hic recusandae unde magnam saepe blanditiis odio atque, voluptatem assumenda temporibus, repellat fugit ad, deleniti tempore voluptates laborum voluptatum? Consectetur veniam laborum omnis nam ex cumque, vel sed nisi dolorem possimus explicabo minus reiciendis. Dignissimos, excepturi, ipsam, delectus maiores suscipit laudantium dicta ex sunt quisquam odit minus voluptatum impedit! Quasi sequi veniam praesentium iusto necessitatibus optio temporibus qui deleniti delectus aspernatur, repellat ipsam similique beatae odio corrupti eligendi quibusdam id fugiat tempora. Minus, deserunt sapiente. Dolores quidem nesciunt autem!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
