import { usersRepo } from "../../../data-access/users-repo";

function handler(req, res) {
    switch (req.method) {
        case 'GET':
            return getUserById();
        default:
            return res.status(405).end(`Method ${req.method} Not Allowed`)
    }

    function getUserById() {
        const user = usersRepo.getById(req.query.id);
        return res.status(200).json(user);
    }
}

export default handler;
