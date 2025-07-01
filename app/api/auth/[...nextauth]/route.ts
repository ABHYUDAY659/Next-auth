import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";
const handler = NextAuth({
  providers : [
         
    CredentialsProvider({
        // The name to display on the sign in form (e.g. 'Sign in with...')
        name: ' email',
       
        credentials: {
          username: { label: "Username", type: "text", placeholder: "sharmaabhyuday56@gmail.com" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
           
            const username = credentials?.username;
            const password = credentials?.password;

            //db request to check id username and password are correct or not

            const user = {
                name : "abhyuday",
                username : "sharmaabhyuday56@gmail.com",
                id:"1"
                
            }
            if(user){
                return user
            }else{
                return null;
            }

        }
      }),
      GoogleProvider({
        clientId: "asd",
        clientSecret: "asdd"
      })

  ]
})

export { handler as GET, handler as POST }