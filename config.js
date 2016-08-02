exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                       (process.env.NODE_ENV === 'production' ?
                            'mongodb://thinkful:thinkful@ds139735.mlab.com:39735/thinkful_shopping_list' :
                            'mongodb://localhost/shopping-list-dev');
                            
exports.PORT = process.env.PORT || 8080;