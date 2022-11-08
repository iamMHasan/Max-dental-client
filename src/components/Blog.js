import React from 'react';
import useTitle from '../hooks/useTitle';

const Blog = () => {
    useTitle('blog')
    return (
        <div className='h-[100vh]'>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-3">
                <div className="collapse-title text-xl font-medium">
                What is the Difference between SQL and NoSQL?
                </div>
                <div className="collapse-content">
                    <p>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-3">
                <div className="collapse-title text-xl font-medium">
                What is JWT, and how does it work??
                </div>
                <div className="collapse-content">
                    <p>JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). <br />
                    JWTs are digitally signed using either a secret (HMAC) or a public/private key pair (RSA or ECDSA) which safeguards them from being modified by the client or an attacker. Stored only on the client: You generate JWTs on the server and send them to the client. The client then submits the JWT with every request.
                    </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-3">
                <div className="collapse-title text-xl font-medium">
                What is the difference between javascript and NodeJS?
                </div>
                <div className="collapse-content">
                    <p>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.
                    </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-3">
                <div className="collapse-title text-xl font-medium">
                How does NodeJS handle multiple requests at the same time?
                </div>
                <div className="collapse-content">
                    <p>Node JS Platform uses “Single Threaded Event Loop” architecture to handle multiple concurrent clients. Then how it really handles concurrent client requests without using multiple threads.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;