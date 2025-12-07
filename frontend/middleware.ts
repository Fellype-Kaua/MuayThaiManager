import {NextResponse} from "next/server";
import {NextRequest} from "next/server";

const Access_Token = "authToken";

export default function middleware (request: NextRequest){
    const path = request.nextUrl.pathname;
    const token = request.cookies.get(Access_Token)?.value;

    const isLoginPage = path === "/login" || path.startsWith("/login/");
    const protectedRoutes = ["/alunos"]
    const isProtectedRoute = protectedRoutes.some((route) =>{
        return path.startsWith(route)
    });

    if (isLoginPage && token) {
        return NextResponse.redirect(new URL("/", request.url));
    }
    if (isProtectedRoute && !token){
        return NextResponse.redirect(new URL("/login", request.url))
    }
    return NextResponse.next();
}

export const config = {
    matcher: ["/alunos/:path*", "/login", "/login/:path*"],
};