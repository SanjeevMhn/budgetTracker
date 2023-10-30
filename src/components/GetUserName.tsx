import { FormEvent, PropsWithChildren, forwardRef } from 'react';

type GetUserNameProps = {
    handleUserName: (event:FormEvent) => void
}


const GetUserName = forwardRef<HTMLInputElement, PropsWithChildren<GetUserNameProps>>(({handleUserName}, userNameRef) => {
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