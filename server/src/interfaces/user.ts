import { Document } from 'mongoose';

export default interface IUser extends Document {
    uid: string;
    name: string;
}
