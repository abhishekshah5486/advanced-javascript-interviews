// XMLHttpRequest
// AJAX (Asynchronous Javascript and XML);

// ReadyState
// Values: 0, 1, 2, 3, 4
// 0: Request not initialized
// 1: Connection with the server established
// 2: Request received
// 3: Processing request
// 4: Request processed and response is ready

// Status
// 200: 'OK'
// 403: Forbidden
// 404: Page not found

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
    if (this.readyState === 4 && this.status === 200){
        console.log(this.response);
    }
}
xhr.open('GET', 'https://fakestoreapi.com/products/1', true);
xhr.send();

