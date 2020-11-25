
export default function Welcome(props) {

    console.log(props)

    const h = <h2>hello {props.firstName} from welcome component {props.lastName}</h2>

    return h
}