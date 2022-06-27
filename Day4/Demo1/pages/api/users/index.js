import { usersRepo } from "../../../data-access/users-repo";
import { withSessionRoute } from "../../../helpers";

export default withSessionRoute(async function (req, res) {
    const user = req.session.user;

    if (user) {
        return handler(req, res);
    } else {
        return res.status(401).json({ message: "Access Denied!" });
    }
});

function handler(req, res) {
    switch (req.method) {
        case 'GET':
            return getUsers();
        case 'POST':
            return createUser();
        default:
            return res.status(405).end(`Method ${req.method} Not Allowed`)
    }

    function getUsers() {
        const users = usersRepo.getAll();
        return res.status(200).json(users);
    }

    function createUser() {
        try {
            usersRepo.create(req.body);
            return res.status(200).json({});
        } catch (error) {
            return res.status(400).json({ message: error });
        }
    }
}