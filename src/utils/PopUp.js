import M from 'materialize-css';

const PopUp = {

    exibeMensagem  : (status, msg) => {

        if(status === "success")
            M.toast({html: msg, classes: 'rounded green', displayLength: 2000});
        if(status === 'error')
            M.toast({html: msg, classes: 'rounded red', displayLength: 2000});
        if(status === 'removed')
            M.toast({html: msg, classes: 'rounded yellow darken-2', displayLength: 2000});
    }
};

export default PopUp;