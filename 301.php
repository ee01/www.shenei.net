<?php

/**
     * ��� ECSHOP ��ǰ������ HTTP Э�鷽ʽ
     *
     * @access  public
     *
     * @return  void
     */
    function http()
    {
        return (isset($_SERVER['HTTPS']) && (strtolower($_SERVER['HTTPS']) != 'off')) ? 'https://' : 'http://';
    }

    /**
     * ȡ�õ�ǰ������
     *
     * @access  public
     *
     * @return  string      ��ǰ������
     */
    function get_domain()
    {
        /* Э�� */
        $protocol = http();

        /* ������IP��ַ */
        if (isset($_SERVER['HTTP_X_FORWARDED_HOST']))
        {
            $host = $_SERVER['HTTP_X_FORWARDED_HOST'];
        }
        elseif (isset($_SERVER['HTTP_HOST']))
        {
            $host = $_SERVER['HTTP_HOST'];
        }
        else
        {
            /* �˿� */
            if (isset($_SERVER['SERVER_PORT']))
            {
                $port = ':' . $_SERVER['SERVER_PORT'];

                if ((':80' == $port && 'http://' == $protocol) || (':443' == $port && 'https://' == $protocol))
                {
                    $port = '';
                }
            }
            else
            {
                $port = '';
            }

            if (isset($_SERVER['SERVER_NAME']))
            {
                $host = $_SERVER['SERVER_NAME'] . $port;
            }
            elseif (isset($_SERVER['SERVER_ADDR']))
            {
                $host = $_SERVER['SERVER_ADDR'] . $port;
            }
        }

        return $protocol . $host;
    }

$domainName = "http://www.shenei.net";	//ת����ַ������
$_domainName = "shenei.net";			//�����Ĺؼ�����
$__domainName = "http://shenei.net";	//��ת����ַ������

//if(get_domain() !=  $domainName){
if (!strpos(get_domain(), $_domainName) || get_domain() ==  $__domainName) {
	Header("HTTP/1.1 301 Moved Permanently");
	Header("Location: ". $domainName.$_SERVER['REQUEST_URI'] );
	exit();
}

?>