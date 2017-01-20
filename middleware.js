/**
 * Created by maciej on 1/19/17.
 */
module.exports = function (req, res, next) {
    req.url = "/" + req.header('X-CD-SessionToken');
    if (req.method === "POST") {
        console.log(req.body, 'post body');
        return
    } else {
        next();
    }

};