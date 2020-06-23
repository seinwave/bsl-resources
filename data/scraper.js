
const cheerio = require('cheerio');
var request = require("request").defaults({rejectUnauthorized:false});
const fs = require('fs')


let services = [];

fs.readFile('doc.html', (err, body) => {
    if (err) {
        console.log(err)
        }
    let $ = cheerio.load(body);
    

    $('a').each(function(i, elem){
        services[i] = [$(this).text(), $(elem).attr('href')] 
    })


    function Service(index, title, url, categories, service_area, contact, description) {
        this.index = index;
        this.title = title;
        this.service_area = service_area;
        this.categories = categories;
        this.contact = contact;
        this.url = url;
        this.description = description;
    }
    
    let farty = []
    let i = 280;
        
        for(let service of services) {
            farty.push(new Service (
            this.index = i,
            this.title = service[0],
            this.url = service[1],
            this.categories = ['Arts'],
            this.service_area = '',
            this.contact = '',
            this.description = ''
            ))
            i++;
        }
    
    
    fs.writeFileSync('temp.html',                   // write to a temp file
    JSON.stringify(farty)), (err) => {
        if (err){
            console.log(err)}
        console.log('ya better work botch')
    }
    
})




// const body = require("data/doc.html");

// let $ = cheerio.load(body);
// console.log(body)
