class EventPublisher
{
    constructor()
    {
        this.events = {};
    }

    subscribe(event, listener)
    {
        if (!this.events[event])
        {
            this.events[event] = [];
        }
        this.events[event].push(listener);
    }

    publish(event, data)
    {
        if (this.events[event])
        {
            this.events[event].forEach((listener) => listener(data));
        }
    }

    unsubscribe(event, listenerToRemove)
    {
        if (!this.events[event])
        {
            return;
        }
        else{
            this.events[event] = this.events[event].filter((listener) => (listener != listenerToRemove))
        }
    }
}

const eventPublisher = new EventPublisher();
eventPublisher.subscribe('greet', (data) => 
{
    console.log(`Hello, ${data}`);
})
eventPublisher.subscribe('greet', (name) => 
{
    console.log(`Hi, ${name}, Welcome to IIT Bombay.`);
})

eventPublisher.publish('greet', 'Abhishek');