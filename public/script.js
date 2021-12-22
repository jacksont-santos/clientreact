async function EventListener() {

    var lista = [];
    await axios.get('/movie/findMany')
        .then(function (response) {
            lista = response.data;
        });

    const inserir = document.getElementsByClassName('inserir');
    const miniCard = <MiniCard filme={filme}/>;
    const inputValue = document.getElementsByClassName("myinput").value;
    var filme;
    lista.map((res) => {
        if (res.title === inputValue) {
            filme = res;
        };
        (inserir.appendChild())
        return filme;
    });
};