import {baseLayoutProps} from "../../../baseLayout";
import {useTranslations} from "next-intl";
import Head from "next/head";
import React from "react";
import {GetStaticPropsContext} from "next";

const Layout1 = ({children, pageTitle}: baseLayoutProps) => {

    const t = useTranslations('baseLayout')

    return (
        <div>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content="Generated by create next app"/>
            </Head>
            <header>
                <h1 className={'headerTitle'}>{t('headerTitle')}</h1>
            </header>
            <main dir={'auto'}>
                {children}
            </main>

            <style jsx>{`
              header {
                border-bottom: 1px solid #914e4e;
              }

              .headerTitle {
                width: 100%;
                text-align: center;
              }

              main {
                padding: 2rem;
                background-color: #e7b7b7;
                color: #8d8d8d;
              }
            `}</style>
        </div>
    )
}

export default Layout1

export async function getStaticProps({locale}: GetStaticPropsContext) {
    return {
        props: {
            messages: (await import(`../../../messages/${locale}.json`)).default
        }
    };
}