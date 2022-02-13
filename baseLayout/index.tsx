import React, {ReactElement} from "react";
import Head from "next/head";
import styles from "../styles/baseLayoutStyles/BaseLayout.module.css";
import {useTranslations} from "next-intl";
import {GetStaticPropsContext} from "next";

export interface baseLayoutProps{
    children : ReactElement,
    pageTitle : string
}

const BaseLayout:React.FC<baseLayoutProps> = ({children,pageTitle}) => {

    const t = useTranslations('baseLayout')

    return(
        <div>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content="Generated by create next app" />
            </Head>
            <header className={styles.header}>
                <h1 className={styles.headerTitle}>{t('headerTitle')}</h1>
            </header>
            <main className={styles.main} dir={'auto'}>
                {children}
            </main>
        </div>
    )
}

export  default  BaseLayout

export async function getStaticProps({locale}: GetStaticPropsContext) {
    return {
        props: {
            messages: (await import(`../messages/${locale}.json`)).default
        }
    };
}