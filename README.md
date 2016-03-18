# BitKidsServer

## 開発者向け情報

### 開発環境の準備

1. 下記のソフトウェアがインストールされていることを確認します

    * Vagrant 1.8 以上
    * VirtualBox 5.0.10 以上

2. リポジトリを clone します

        git clone https://github.com/BitKids/BitKidsServer

3. clone してできたディレクトリに移動します

        cd BitKidsServer

4. 下記のコマンドを実行して、開発用仮想環境を作成します

        vagrant up

### 開発環境の Rails アプリケーションの利用・運用

* 起動

        sudo start puma-manager

* 停止

        sudo stop puma-manager

* 再起動

        sudo restart puma-manager

Rails アプリケーションは、上記手順で起動後、

* nginx 経由: http://192.168.33.30/
* アプリケーション直接: http://192.168.33.30:3000/

のいずれかでアクセスが可能です
