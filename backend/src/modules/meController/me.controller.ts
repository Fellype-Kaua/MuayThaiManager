const meController = async (req: Request, res: Response) => {
  return res.json({ user: req.user });
};
export default meController;
