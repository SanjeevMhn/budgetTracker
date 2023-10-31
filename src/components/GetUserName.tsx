import { Dispatch, FormEvent, PropsWithChildren, SetStateAction, forwardRef } from 'react';

type GetUserNameProps = {
    setUserName: Dispatch<SetStateAction<string>>
}


const GetUserName = forwardRef<HTMLInputElement,PropsWithChildren<GetUserNameProps>>(({ setUserName }, userNameRef) => {
    const handleUserName = (event: FormEvent) => {
        event.preventDefault();
        setUserName(userNameRef.current.value);
    }
    return (
        <>
            <h2 className="header-text">Please enter your name</h2>
            <form onSubmit={handleUserName}>
                <input type="text" className="form-control" ref={userNameRef} required />
                <button type="submit">Submit</button>
            </form>
        </>
    )
})

export default GetUserName;