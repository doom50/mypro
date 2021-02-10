import { Product } from './Product/Product.js';
import { Tst } from './Product/Tst.js';

//クラスのインスタンス化

const product = new Product();
const tst = new Tst();

//インスタンス化したクラスメソッドの呼出
product.getProduct();
tst.getTst();
product.getBaseProduct(); //Productクラスしか呼び出していないのにBaseProductメソッドを使える（継承)
