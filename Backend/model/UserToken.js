const fs = require('fs');
const path = require('path');

const DATA_PATH = path.join(__dirname, '..', 'data', 'userToken.json')

const UserToken = {
  all: function ()
  {
    return JSON.parse(fs.readFileSync(DATA_PATH, 'utf8'));
  },
};

const authModel = (token) =>
{
  const userTokenList = UserToken.all()
  //Kiểm tra xem token có trong danh sách không
  const user = userTokenList.find((user) => user.token === token)
  if (!user)
  {
    return { error: 401, message: 'Unauthorized' }
  }
  return user
}
module.exports = authModel