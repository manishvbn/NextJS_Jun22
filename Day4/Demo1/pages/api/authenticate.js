import { withSessionRoute } from "../../helpers";
import { usersRepo } from "../../data-access/users-repo";

export default withSessionRoute(async function (req, res) {
    if (req.method === "POST") {
        const { username, password } = req.body;

        const user = usersRepo.getByEmail(username);

        if (user && (username === user.email && password === user.password)) {
            req.session.user = user;
            await req.session.save();
        } else {
            return res.status(401).send("Username or Password is Invalid!");
        }
    }
    return res.status(401).send("Method cannot be called....");
});