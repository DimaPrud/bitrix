<?php if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>

<?php if(empty($arResult['ALL_ITEMS'])) die; ?>


<nav class="headerNav">-->
                    <ul class="navDiv">
                        <?php foreach ($arResult['ALL_ITEMS'] as $arItem) : ?>
                        <?php if($arItem['SELECTED']) : ?>
                        <li class="navHeadP active"><a href="<?=$arItem['LINK']?>" class="navHS active"><?=$arItem['TEXT']?></a>
                            <?php else: ?>
                        <li class="navHeadP"><a href="<?=$arItem['LINK']?>" class="navHS"><?=$arItem['TEXT']?></a>
                            <?php endif;?>
                        <?php endforeach; ?>
                            <ul class="navUl"></ul></li>

                        <li class="navHeadP active"><a href="http://flowers3.beget.tech/body2.php" class="navHS active" id="navNav">ПОДОБРАТЬ ПЕРСОНАЛ</a>
                            <ul class="navUl">
                                <li class="ulLi active"><a href="#" class="liP active">О нас</a></li>
                                <li class="ulLi active"><a href="#" class="liP active">Задать вопрос</a></li>
                                <li class="ulLi active"><a href="#" class="liP active">Это интересно</a></li>
                                <li class="ulLi active"><a href="#" class="liP active">Отзывы</a></li>

                            </ul>
                        </li>

                        <li class="navHeadP active"><a href="#" class="navHS active">ЦЕНЫ</a>
                            <ul class="navUl"></ul></li>

                        <li class="navHeadP active" id="zaglushka"></li>

                        <li class="navHeadP active"><a href="#" class="navHS active">ОСТАВИТЬ ЗАЯВКУ</a>
                            <ul class="navUl"></ul></li>

                        <li class="navHeadP active"><a href="#" class="navHS active">ОСТАВИТЬ ВАКАНСИЮ</a>
                            <ul class="navUl"></ul></li>

                        <li class="navHeadP active"><a href="#" class="navHS active">КОНТАКТЫ</a>
                            <ul class="navUl"></ul></li>
                    </ul>
                </nav>
