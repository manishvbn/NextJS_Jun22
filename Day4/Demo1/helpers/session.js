// this file is a wrapper with defaults to be used in both API routes and `getServerSideProps` functions
import { withIronSessionApiRoute, withIronSessionSsr } from "iron-session/next";

const sessionOptions = {
    password: "complex_password_at_least_32_characters_long",
    cookieName: "myapp_with-iron-session",
    cookieOptions: {
        secure: process.env.NODE_ENV === "production",
    },
};

export function withSessionSsr(handler) {
    return withIronSessionSsr(handler, sessionOptions);
}

export function withSessionRoute(handler) {
    return withIronSessionApiRoute(handler, sessionOptions);
}