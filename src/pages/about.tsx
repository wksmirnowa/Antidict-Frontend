import React from "react";
import './about.css';

export function About() {
    return (
        <div className="about">
            <h2 style={{margin: '0 auto', textAlign: 'center'}}>О проекте</h2>
            <p>Если вы хотите ознакомиться с нашим проектом подробнее, рекомендуем прочитать нашу <a
                href="https://docs.google.com/document/d/1emjyoURAS04NAJ9B-wf-T4BE5FbthulvbPZq59v0igo/edit?usp=sharing">статью</a> и
                заглянуть в наш <a href="https://github.com/wksmirnowa/antidict">репозиторий на github</a>. Краткое
                содержание нашей статьи приведено ниже.</p>
            <p> Наша статья посвящена исследованию широкого спектра несловарных слов, которые можно встретить в
                интернете, а также
                новых языковых
                явлений. Основное
                внимание было уделено
                трем следующим
                классам:
                заимствованиям, экспрессивным
                формам и искажениям.
                Причиной такого выбора
                послужила высокая
                продуктивность данных
                классов (возможность
                образовывать новые
                слова на основе уже
                существующих и их
                частей – морфем). Также
                в эти три класса
                попадает большой
                процент неологизмов и
                окказионализмов, которые
                встречаются в
                интернете.</p>
            <p>В качестве исходных данных был использован список выкачанных из <a
                href="http://www.webcorpora.ru">ГИКРЯ</a> слов, которые не удалось проанализировать при помощи
                библиотеки <a href="https://yandex.ru/dev/mystem/">MyStem</a>. Данный список слов был собран в рамках <a
                    href="https://ainlconf.ru/2018/agenda#program-demo-and-posters">исследовательской работы</a> Ириной
                    Кротовой и Василисой Адриянец. Этапы предобработки данных, которые мы использовали, состоят из
                удаления идентичных строк, сжатия повторяющихся букв, найденных в словах, в одну и прочих методов
                нормализации текстовых данных, о которых подробнее сказано в нашей статье. Для получения векторных
                представлений словарных и несловарных слов была использована модель fastText с сайта <a
                    href="https://rusvectores.org/ru/models/">RusVectōrēs</a>, обученная на корпусе Araneum Russicum.
                Причина, по которой мы выбрали эту векторную модель, заключается в том, что при получении с ее помощью
                эмбеддингов слов используются не только дистрибутивные характеристики самого слова, но и подслова
                (subwords), или буквосочетания, в него входящие.</p>
            <p> Для получения опорной (baseline) метрики при классификации была использована логистическая регрессия
                по причине простоты в использовании и низким требованиям к
                ресурсам. Из-за несбалансированных данных для оценки
                качества работы модели была выбрана
                метрика <a
                    href="https://learnmachinelearning.wikia.org/ru/wiki/Оценки_классификаторов#F-.D0.BC.D0.B5.D1.80.D0.B0">
                    f-мера</a>, включающая себя точность и полноту. После серии
                экспериментов для классификации всех трех классов слов в итоге была выбрана модель, использующая метод
                опорных векторов и стохастический градиентный спуск, поскольку она показала наилучший результат. На
                заключительных этапах для оценки моделей использовалась мера согласия между аннотаторами – <a
                    href="https://datewiki.ru/wiki/Krippendorff%27s_alpha"> альфа Криппендорфа</a>.</p>
            <p> Заимствования, экспрессивные формы и искажения в статье рассматривались отдельно друг от друга. По этой
                причине изначально мы обучали не одну многоклассовую модель, а три бинарных классификатора. Для работы
                данного сайта мы отошли от первоначальной концепции и перешли к одному многоклассовому
                классификатору. </p>
            <p>Исходя из описанных в статье результатов классификации, можно судить, что применение предобученной модели
                fastText для получения эмбеддингов оказалось очень эффективным. Выяснилось, что качество модели не
                всегда
                совпадает с оценкой аннотаторов из-за того, что изначально классы получились достаточно открытыми для
                интерпретации. Из чего следует, что несловарные слова можно зачастую отнести к более чем одному из
                рассмотренных
                нами классов.</p>


        </div>
    );
}
