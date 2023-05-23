import React from 'react';

const Blog = () => {
    return (
        <div className='lg:mx-20 lg:my-20'>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-xl">
                <div className="collapse-title text-xl font-medium">
                    What is an access token and refresh token? How do they work and where should we store them on the client-side?
                </div>
                <div className="collapse-content">
                    <p>Access tokens and refresh tokens are commonly used in authentication and authorization systems. Access token use for save API header from anonymous user. And the other hand refresh token use for get new access token.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-xl">
                <div className="collapse-title text-xl font-medium">
                Compare SQL and NoSQL databases?
                </div>
                <div className="collapse-content">
                    <p>In SQL Databases Structured and predefined schema. And NoSQL Databases Flexible schema or schema-less. SQL Database vertically scalable. And NoSQL database horizontal scalability for handling large data and high traffic. SQL database relational data model with tables and columns. NoSQL database Support various data models key-value, document, columnar, graph etc.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-xl">
                <div className="collapse-title text-xl font-medium">
                What is express js? What is Nest JS (google it)?
                </div>
                <div className="collapse-content">
                    <p>Express js is a minimalist web framework for node.js . Express.js make very easy to the process of handling HTTP requests, routing, middleware integration, and managing server-side logic. Nest JS is a progressive nodejs framework. It build for efficient, scalable, and maintainable server-side applications.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-xl">
                <div className="collapse-title text-xl font-medium">
                What is MongoDB aggregate and how does it work (google it)?
                </div>
                <div className="collapse-content">
                    <p>MongoDB aggregation is a powerful tool for performing advanced data processing and analysis tasks within the MongoDB database. It is use for a doc grouping, sorting, filtering, transfer etc.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;

<div className='flex flex-col text-justify justify-center mx-auto items-center'>
    <h2 className='text-center'>Question - 1 : What is an access token and refresh token? How do they work and where should we store them on the client-side?
    </h2>
    <p></p>
</div>