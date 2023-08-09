export default function handler(req, res) {
	console.log(req.method);
	console.log(req.body);

	if (req.method === 'GET') {
		res.status(200).json({ name: 'John Doe' });
	}

	if (req.method === 'POST') {
		res.status(200).json({ name: req.body + 1 });
	}
}
