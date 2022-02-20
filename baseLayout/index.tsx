import React, {ReactElement} from "react";
import Head from "next/head";
import {useTranslations} from "next-intl";
import {GetStaticPropsContext} from "next";
import {useDispatch, useSelector} from "react-redux";
import Layout0 from "../component/layouts/layout0";
import Layout1 from "../component/layouts/layout1";
import {changeTheme} from "../redux/reducers/themeReducer/themeReducer";

export interface baseLayoutProps{
    children : ReactElement,
    pageTitle : string
}

const BaseLayout:React.FC<baseLayoutProps> = ({children,pageTitle}) => {

    const dispatch = useDispatch()
    const themeId: number = useSelector((state: any) => state.theme.themeId)

    const t = useTranslations('baseLayout')

    switch (themeId){
        case 0:
            return (
                <>
                    <Layout0 pageTitle={pageTitle}>{children}</Layout0>
                    <button onClick={()=> dispatch(changeTheme({themeId : 0}))}>layout 0</button>
                    <button onClick={()=> dispatch(changeTheme({themeId : 1}))}>layout 1</button>
                </>
            )
        case 1:
            return (
                <>
                    <Layout1 pageTitle={pageTitle}>{children}</Layout1>
                    <button onClick={()=> dispatch(changeTheme({themeId : 0}))}>layout 0</button>
                    <button onClick={()=> dispatch(changeTheme({themeId : 1}))}>layout 1</button>
                </>
            )
        default:
            return (
                <>
                    <Layout0 pageTitle={pageTitle}>{children}</Layout0>
                    <button onClick={()=> dispatch(changeTheme({themeId : 0}))}>layout 0</button>
                    <button onClick={()=> dispatch(changeTheme({themeId : 1}))}>layout 1</button>
                </>
            )
    }
}

export  default  BaseLayout

export async function getStaticProps({locale}: GetStaticPropsContext) {
    return {
        props: {
            messages: (await import(`../messages/${locale}.json`)).default
        }
    };
}