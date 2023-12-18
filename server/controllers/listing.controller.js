import listingModel from "../models/listing.model.js";

export const createListing = async (req, res) => {
    try {
        const listing = await listingModel.create(req.body);
        return res.status(201).send(listing);
    }
    catch (err) {
        return res.status(500).send({ error: err.message });
    }
}

export const getListings = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 5;
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;

        const total = await listingModel.countDocuments();
        const listings = await listingModel.find().skip(startIndex).limit(limit);

        const pagination = {
            currentPage: page,
            totalPages: Math.ceil(total / limit),
            totalItems: total
        };

        if (endIndex < total) {
            pagination.nextPage = page + 1;
        }

        if (startIndex > 0) {
            pagination.previousPage = page - 1;
        }

        return res.status(200).send({ listings, pagination });
    }
    catch (err) {
        return res.status(500).send({ error: err.message });
    }
}