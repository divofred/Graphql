import Book from '../../db/models/Books';

export const usersResolver = {
  Query: {
    async getBook(_: any, { ID }: { ID: string }) {
      return await Book.findById(ID);
    },
    async getBooks(_: any) {
      return await Book.find();
    }
  },
  Mutation: {
    async createBook(
      _: any,
      {
        bookInput: { author, title, year }
      }: { bookInput: { author: string; title: string; year: string } }
    ) {
      const res = await new Book({ author, title, year }).save();

      return res._id;
    },
    async updateBook(
      _: any,
      {
        ID,
        bookInput: { author, title, year }
      }: {
        ID: string;
        bookInput: { author: string; title: string; year: string };
      }
    ) {
      await Book.updateOne({ _id: ID }, { $set: { author, title, year } });

      return ID;
    }
  }
};
