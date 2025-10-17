import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { VscGithub } from 'react-icons/vsc';

const SocialLogin = () => {
    return (
        <div>
           <h2 className='font-bold mb-5'>Login With</h2>
           <div className='space-y-3'>
            <button className='btn btn-secondary btn-outline w-full '><FcGoogle size={24} /> Login with Google</button>
            <button className='btn btn-primary btn-outline w-full '> <VscGithub size={24}/>Login with GitHub</button>
            </div> 
        </div>
    );
};

export default SocialLogin;