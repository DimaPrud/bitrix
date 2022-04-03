<?php if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die(); ?>
<?php

use Bitrix\Main\Page\Asset;

?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <?php $APPLICATION->ShowHead(); ?>
    <title><?php $APPLICATION->ShowTitle("Unionfweb"); ?></title>

    <?php

    Asset::getInstance()-> addCss(SITE_TEMPLATE_PATH . 'style.css');

    Asset::getInstance()->addJs(SITE_TEMPLATE_PATH . 'script.js');

    ?>

    <meta charset="utf8">

<!--    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"-->
<!--    integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">-->
<!--    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"-->
<!--    integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>-->
<!--    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"-->
<!--    integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>-->
<!--    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js"-->
<!--    integrity="sha384-Atwg2Pkwv9vp0ygtn1JAojH0nYbwNJLPhwyoVbhoPwBhjQPR5VtM2+xf0Uwh9KtT" crossorigin="anonymous"></script>-->

    <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/gh/kenwheeler/slick@1.9.0/slick/slick.css"/>
    <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/gh/kenwheeler/slick@1.9.0/slick/slick-theme.css"/>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="http://flowers3.beget.tech/local/templates/uniofweb/script.js"></script>
    <script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
    <link rel="stylesheet" href="http://flowers3.beget.tech/local/templates/uniofweb/style.css">

    <?php include "js.php"?>
</head>
<body id="body">

<div id="panel"><?php $APPLICATION->ShowPanel();?></div>

    <div class="content">
        <header id="headname">
            <div class="headHead">
                <p id="mainTitle">8 (4872) 31-13-45</p>
                <div class="leave_bottom" id="leave_request_bottom">
                    <a class="text_bottom">Оставить заявку</a>
                </div>
                <div class="leave_bottom" id="leave_summary_bottom">
                    <a class="text_bottom">Оставить резюме</a>
                </div>
                <div class="headRight">
                    <form id="leave_request_menu">
                        <ul class="leave_request_menu">
                            <li><input type="text" placeholder=" ФИО"></li>
                            <li><input type="tel" placeholder="  Телефон"></li>
                            <li><label for="select" class="selectY">
                                    <input type="radio" name="list" value="not_changed" id="select" class="inputY">
                                    <div class="items">
                                        <input type="radio" name="list" value="first_value" id="list[0]" class="inputY">
                                        <label for="list[0]"> Репетитор</label>
                                        <input type="radio" name="list" value="second_value" id="list[1]" class="inputY">
                                        <label for="list[1]"> Гувернантка</label>
                                        <input type="radio" name="list" value="second_value" id="list[2]" class="inputY">
                                        <label for="list[2]"> Няня</label>
                                        <input type="radio" name="list" value="second_value" id="list[3]" class="inputY">
                                        <label for="list[3]"> Водитель</label>
                                        <input type="radio" name="list" value="second_value" id="list[4]" class="inputY">
                                        <label for="list[4]"> Садовник</label>
                                        <span id="textY">Должность</span>
                                    </div>
                                </label></li>
                            <li><label for="selectX" class="selectX">
                                    <input type="radio" name="list" value="not_changed" id="selectX" class="inputX">
                                    <div class="itemsX">
                                        <input type="radio" name="list" value="first_value" id="list[5]" class="inputX">
                                        <label for="list[5]"> Полный день</label>
                                        <input type="radio" name="list" value="second_value" id="list[6]" class="inputX">
                                        <label for="list[6]"> Пол дня</label>
                                        <input type="radio" name="list" value="second_value" id="list[7]" class="inputX">
                                        <label for="list[7]"> График работы</label>
                                        <input type="radio" name="list" value="second_value" id="list[8]" class="inputX">
                                        <label for="list[8]"> Несколько часов</label>
                                        <input type="radio" name="list" value="second_value" id="list[9]" class="inputX">
                                        <label for="list[9]"> Круглосуточно</label>
                                        <span id="textX">График работы</span>
                                    </div>
                                </label></li>
                            <li><textarea type="text" placeholder=" Дополнительная информация" class="text"></textarea></li>
                            <li><input type="submit" value="ОТПРАВИТЬ" id="submitT"></li>
                        </ul>
                    </form>
                    <form id="leave_summary_menu">
                        <ul class="leave_summary_menu">
                            <li><input type="text" placeholder=" ФИО"></li>
                            <li><input type="tel" placeholder=" Телефон"></li>
                            <li><label for="selectZ" class="selectZ">
                                    <input type="radio" name="list" value="not_changed" id="selectZ" class="inputZ">
                                    <div class="itemsZ">
                                        <input type="radio" name="list" value="first_value" id="list[10]" class="inputZ">
                                        <label for="list[10]"> Репетитор</label>
                                        <input type="radio" name="list" value="second_value" id="list[11]" class="inputZ">
                                        <label for="list[11]"> Гувернантка</label>
                                        <input type="radio" name="list" value="second_value" id="list[12]" class="inputZ">
                                        <label for="list[12]"> Няня</label>
                                        <input type="radio" name="list" value="second_value" id="list[13]" class="inputZ">
                                        <label for="list[13]"> Водитель</label>
                                        <input type="radio" name="list" value="second_value" id="list[14]" class="inputZ">
                                        <label for="list[14]"> Садовник</label>
                                        <span id="textZ">Должность</span>
                                    </div>
                                </label></li>
                            <li><input type="text" placeholder=" Образование" </li>
                            <li><input type="text" placeholder=" Прикрепить резюме"></li>
                            <li><input type="submit" value="ОТПРАВИТЬ" id="submitT2"></li>
                        </ul>
                    </form>
                </div>
            </div>
            <div id="headImg">
                <a href="http://flowers3.beget.tech/index.php" id="navHeadImg"></a>
            </div>
            <nav class="headerNav">
                <ul class="navDiv">


<!--            --><?//$APPLICATION->IncludeComponent(
//                                "bitrix:menu",
//                                "",
//                                Array(
//                                    "ALLOW_MULTI_SELECT" => "N",
//                                    "CHILD_MENU_TYPE" => "left",
//                                    "DELAY" => "N",
//                                    "MAX_LEVEL" => "2",
//                                    "MENU_CACHE_GET_VARS" => array(""),
//                                    "MENU_CACHE_TIME" => "3600",
//                                    "MENU_CACHE_TYPE" => "N",
//                                    "MENU_CACHE_USE_GROUPS" => "Y",
//                                    "ROOT_MENU_TYPE" => "main",
//                                    "USE_EXT" => "N"
//                                )
//                            );?>

                    <li class="navHeadP"><a href="#" class="navHS">ГЛАВНАЯ</a>
                        <ul class="navUl"></ul></li>

                    <li class="navHeadP"><a href="http://flowers3.beget.tech/body2.php" class="navHS" id="navNav">ПОДОБРАТЬ ПЕРСОНАЛ</a>
                        <ul class="navUl">
                            <li class="ulLi"><a href="#" class="liP">О нас</a></li>
                            <li class="ulLi"><a href="#" class="liP">Задать вопрос</a></li>
                            <li class="ulLi"><a href="#" class="liP">Это интересно</a></li>
                            <li class="ulLi"><a href="#" class="liP">Отзывы</a></li>

                        </ul>
                    </li>

                    <li class="navHeadP"><a href="#" class="navHS">ЦЕНЫ</a>
                        <ul class="navUl"></ul></li>

                    <li class="navHeadP" id="zaglushka"></li>

                    <li class="navHeadP"><a href="#" class="navHS">ОСТАВИТЬ ЗАЯВКУ</a>
                        <ul class="navUl"></ul></li>

                    <li class="navHeadP"><a href="#" class="navHS">ОСТАВИТЬ ВАКАНСИЮ</a>
                        <ul class="navUl"></ul></li>

                    <li class="navHeadP"><a href="#" class="navHS">КОНТАКТЫ</a>
                        <ul class="navUl"></ul></li>
                </ul>
            </nav>
        </header>
        <section class="section">
            <div class="imgDiv multiple-items">
                <div class="imgHead" for="slider1">
                    <img src="http://flowers3.beget.tech/local/templates/uniofweb/png/PNG6.png">
                </div>
                <div class="imgHead" for="slider2">
                    <img src="http://flowers3.beget.tech/local/templates/uniofweb/png/PNG5.png">
                </div>
                <div class="imgHead" for="slider3">
                    <img src="http://flowers3.beget.tech/local/templates/uniofweb/png/PNG4.png">
                </div>
                <div class="imgHead" for="slider4">
                    <img src="http://flowers3.beget.tech/local/templates/uniofweb/png/PNG3.png">
                </div>
                <div class="imgHead" for="slider5">
                    <img src="http://flowers3.beget.tech/local/templates/uniofweb/png/PNG2.png">
                </div>
                <div class="imgHead" for="slider6">
                    <img src="http://flowers3.beget.tech/local/templates/uniofweb/png/PNG1.png">
                </div>
            </div>
<!--            <nav class="navImg">-->
<!--                <input type="radio" name="radio" checked class="navInput slider"  oninput=showSlides(1)>-->
<!--                <input type="radio" name="radio" class="navInput slider" oninput=showSlides(2)>-->
<!--                <input type="radio" name="radio" class="navInput slider" oninput=showSlides(3)>-->
<!--                <input type="radio" name="radio" class="navInput slider" oninput=showSlides(4)>-->
<!--                <input type="radio" name="radio" class="navInput slider" oninput=showSlides(5)>-->
<!--                <input type="radio" name="radio" class="navInput slider" oninput=showSlides(6)>-->
<!--            </nav>-->