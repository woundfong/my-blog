var SQL = {
    insert:'INSERT INTO leaving_messages(name,msg) VALUES(?,?)', 
    queryAll:'SELECT * FROM leaving_messages'  
    // getUserById:'SELECT * FROM User WHERE uid = ? '
};
module.exports = SQL;