import collegeModel from '../models/collegeModel.js';
import internModel from '../models/interModel.js';
import { isValidFullName, isValidAbvr, isValidBody, isValidUrl } from '../util/validator.js';

//createCollege
export const createCollege = async (req, res) => {
    try {
        const reqBody = req.body;
        const { name, fullName, logoLink } = reqBody;

        if (!name) return res.status(400).send({ status: false, message: 'name is required.' });
        if (!fullName) return res.status(400).send({ status: false, message: 'fullName is required.' });
        if (!logoLink) return res.status(400).send({ status: false, message: 'logoLink is required.' });

        if (!isValidBody(reqBody)) return res.status(400).send({ status: false, message: 'Please enter data on the body.' });
        if (!isValidAbvr(name)) return res.status(400).send({ status: false, message: `'${name}' this name isn't valid.` });
        if (!isValidFullName(fullName)) return res.status(400).send({ status: false, message: `'${fullName}' this fullName isn't valid.` });
        if (!isValidUrl(logoLink)) return res.status(400).send({ status: false, message: `'${logoLink}' this logoLink isn't valid.` });

        //existsCollege
        const existsCollege = await collegeModel.findOne({ name });
        if (existsCollege) return res.status(400).send({ status: false, message: `'${name}' already exist.` });

        //newCollege
        const newCollege = await collegeModel.create(reqBody);

        const data = {
            name: newCollege.name,
            fullName: newCollege.fullName,
            logoLink: newCollege.logoLink,
            isDeleted: newCollege.isDeleted
        };
        return res.status(201).send({ status: true, message: `'${name}' College register successfully.`, data: data });
    }
    catch (err) {
        return res.status(500).send({ status: false, message: err.message });
    }
};

//getCollege
export const getCollege = async (req, res) => {
    try {
        const name = req.query.collegeName;
        if (!name) return res.status(400).send({ status: false, massage: 'collegeName is required for query.' });
        if (!isValidFullName(name)) return res.status(400).send({ status: false, message: `'${name}' this college name isn't valid.` });

        //existsCollege
        const existsCollege = await collegeModel.findOne({ $or: [{ fullName: name }, { name }], isDeleted: false });
        if (!existsCollege) return res.status(404).send({ status: false, massage: `'${name}' college dose't exists.` });

        let existsInterns = await internModel.find({ collegeId: existsCollege._id, isDeleted: false }).select({ name: 1, email: 1, mobile: 1 });

        if (existsInterns.length === 0) existsInterns = ['No intern applied yet.'];
        let data = {
            name: existsCollege.name,
            fullName: existsCollege.fullName,
            logoLink: existsCollege.logoLink,
            interns: existsInterns
        };
        return res.status(200).send({ status: true, data: data });
    }
    catch (err) {
        return res.status(500).send({ status: false, error: err.message });
    }
};
