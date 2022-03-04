export const helpHtpp = ()=>{
    const customFetch = (url, options)=>{
        const defaultHeaders = {
            accept: "application/json"
        };
        //OPTIONS posee signal, methdo, headers y body como propiedades, vos podes establecerle con el punto
        //una propiedad al objeto options.salchicha = 2; asi se le puede crear y asignarle una propiedad al objeto

        //este abort controller sirve para que cuando la peticion a la url nunca recibe respuesta
        //abort controller sirve pa cuando el servidor esta caido entonces la peticion se anula
        const controller = new AbortController();
        //lo que hacemos aki es que el parametro optiones va a tener una propiedad llamada
        //signal
        options.signal = controller.signal;

        options.method = options.method  || "GET";
        //si el usuario manda headers, las mezcla con las que tenemos de defaul, sino deja como esta
        options.headers = options.headers ? {...defaultHeaders, ...options.headers} : defaultHeaders
        //raravez necesitamos mandar una peticion get con body, pero tampoco podemos mandarlo
        //falso o vacio por eso directamente la borramos, ahora si es otra peticion diferente a get
        //debemos pasarle el body con tipo texto
        options.body = JSON.stringify(options.body) || false;
        //este metodo delete me borra la propiedad body del objeto
        if(options.body === false) delete options.body;

        setTimeout(() => controller.abort(), 3000);

        console.log(options)
    
        //retorno una promesa
        return fetch(url,options)
            .then(res => res.ok ? res.json() : Promise.reject(
                {
                    err: true,
                    status: res.status || "00",
                    statusText: res.statusText || "Ocurrio un error"
                }        
            ))
            .catch(err=>err)
    }

    const get = (url, options = {})=> customFetch(url ,options);
    
    const post = (url, options = {})=>{
        options.method = "POST";
        return customFetch(url, options);
    }

    const put = (url, options= {})=>{
        options.method = "PUT";
        return customFetch(url, options);
    }

    const del = (url, options= {})=>{
        options.method = "DELETE";
        return customFetch(url, options);
    }
    

    return {
        get,
        post,
        put,
        del
    }
    /*PARA ENTENDER:
    
    helpHttp, al invocarlo desde otro lado, lo que hara es que te devolvera los 4 metodos creados
    get, post, put y del. entonces al devolvertelos van a ser almacenados dentro de esa variable
    donde vos llamaste a helpHtpp y con el . vos podes acceder a esos metodos.

    entonces haces

    let caja = helpHtpp(); invocas a este help que devuelve 4 metodos
    luego haces caja.get(url, option) entonces ahi llamas al metodo get que te devolvio
    y como el metodo get llama a custom fetch, entonces poeds usar then o catch
    
    
    */
}

