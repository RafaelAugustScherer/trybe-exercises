import mongoose from 'mongoose';

const createConnection = (
  databaseURI = 'mongodb://localhost:27017/world_cups'
) => {
  mongoose.connect(databaseURI);
}

export default createConnection;