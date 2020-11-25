import { Button } from '@material-ui/core';

export default function TodoForm(){

    return(

        <div>
            <form>
                <input type="text" name="title" placeholder="title ...."/>
                <br/>
                <input type="text" name="dueDatele" placeholder="date ...."/>
                <br/>
                <input type="checkbox"/>
                <br/>
                <Button variant="contained" color="primary" >Submit</Button>
            </form>
        </div>
    )
}