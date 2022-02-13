import type {GetStaticPropsContext, NextPage} from 'next'
import {useDispatch, useSelector} from "react-redux";
import {add, Idata} from "../redux/reducers/dataReducer/dataReducer";
import {useState} from "react";
import {useTranslations} from "next-intl";
import BaseLayout from "../baseLayout";

const Home: NextPage = () => {
    const dispatch = useDispatch()
    const dataList: Idata[] = useSelector((state: any) => state.data.dataList)

    const t = useTranslations('home')

    const [inputVal , setInputVal] = useState<string>('')

  return (
      <BaseLayout pageTitle={t('title')}>
          <>
              <p>
              <span>
                  {t('dataTitle')}
              </span>
                  <span>
                  {dataList.map((item,index) => index < dataList.length - 1 ? `${item},` : item)}
              </span>
              </p>
              <input onChange={(e)=> setInputVal(e.target.value)} value={inputVal}/>
              <button onClick={()=> inputVal.length > 0 && dispatch(add({data:inputVal}))}>{t('addDataBtnText')}</button>
          </>
      </BaseLayout>
  )
}

export default Home

export async function getStaticProps({locale}: GetStaticPropsContext) {
    return {
        props: {
            messages: (await import(`../messages/${locale}.json`)).default
        }
    };
}