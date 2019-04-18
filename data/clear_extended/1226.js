$(function() {
    // ���ޥۡ����֥�å��Ǥϥϥ�С�������˥塼�򥿥åפ����
    // �ƥ��ƥ��꡼�Υ�˥塼�����Ĥ���
    $('.js-cms-header-parent-menu-trigger').on('click', function(event) {
        $('.js-cms-header-parent-menu').slideToggle(200);
    });

    // PC�ǤϿƥ��ƥ��꡼�˥ޥ������������Ťͤ��
    // �ҥ��ƥ��꡼�Υ�˥塼��ɽ������
    $('.js-cms-header-child-menu-trigger').on({
        'mouseenter': function() {
            $(this).addClass('is-hover');
        },
        'mouseleave': function() {
            $(this).removeClass('is-hover');
        }
    });
});