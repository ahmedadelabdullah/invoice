//
//
//
// $(document).ready(function () {
//
//
// $('#invoice_details , #invoice_details_offices').on('keyup blur' , '.quantity' , function () {
//     let $row = $(this).closest('.repeated');
//     let quantity = $row.find('.quantity').val() || 0;
//     let unit_price = $row.find('.unit_price').val() || 0;
//     let total_pieces = $('.total_pieces').val() || 0;
//     $row.find('.price').val((quantity * unit_price).toFixed(0));
//     $('.sub_total').val(sum_price('.price'));
//     $('.total_amount').val(($('.sub_total')));
//     $('.total_rolls').val(sum_price('.Norolls'));
//     let sub_total = $('.sub_total').val() || 0;
//     $('.total_amount ').val(sub_total - (sum_price('.quantity') * ($('.discount').val())));
//
//
//
// });
//
//     $('#invoice_details ,  #invoice_details_offices').on('keyup blur' , '.unit_price' , function () {
//         let $row = $(this).closest('.repeated');
//         let quantity = $row.find('.quantity').val() || 0;
//         let unit_price = $row.find('.unit_price').val() || 0;
//         $row.find('.price').val((quantity * unit_price).toFixed(0));
//         // $('.total_amount').val(sum_price('.price'));
//         $('.sub_total').val(sum_price('.price'));
//         // $('.total_amount').val(sum_price('.price') - ($('.discount').val() * quantity));
//         let sub_total = $('.sub_total').val() || 0;
//
//         $('.total_amount ').val(sub_total - (sum_price('.quantity') * ($('.discount').val())));
//
//         $('.total_rolls').val(sum_price('.Norolls'));
//     });
//
//
//     $('#invoice_details , #invoice_details_offices').on('keyup blur' , '.Norolls , .quantity' , function () {
//         $('.total_rolls ').val(sum_price('.Norolls'));
//         $('.total_pieces').val(sum_price('.quantity'));
//     });
//
//     $('#invoice_details , #invoice_details_offices').on('keyup blur' , '.discount' , function () {
//         let sub_total = $('.sub_total').val() || 0;
//         $('.total_amount ').val(sub_total - (sum_price('.quantity') * ($('.discount').val())));
//     });
//
//
//
//     let sum_price = function ($selector) {
//         let sum = 0;
//         $($selector).each(function () {
//             let selectorVal = $(this).val() !== '' ? $(this).val() : 0;
//             sum += parseFloat( selectorVal);
//         });
//         return sum.toFixed(0);
//     }
//
//
//     $(document).on('click' , '.del' , function (e) {
//         $(this).parent().remove();
//         let rows_number = parseInt($('.repeated').length); // The no created rows
//         $('.no_models').val(rows_number);
//         $('.total_amount').val(sum_price('.price'));
//         $('.total_rolls').val(sum_price('.Norolls'));
//         $('.sub_total').val(sum_price('.price'));
//         let sub_total = $('.sub_total').val() || 0;
//         $('.total_amount ').val(sub_total - (sum_price('.quantity') * ($('.discount').val())));
//
//
//     });
//
//     // start  adding row in texes invoices page
//     $(document).on('click' , '.add_row' , function () {
//         let divCount = $('#invoice_details').find('.repeated:last').length;
//         let numIncreament = divCount > 0 ? parseInt($('#invoice_details').find('.repeated:last').attr('id'))+ 1 : 0;
//         $('.cont').append($(`<div class="repeated col-md-12" id='`+numIncreament+`'>
//             </div>
//                         <div class="col-md-2 mt-3">
//            </div>
//             <div class="col-md-2 mt-3">
//                 <input type="number" class="form-control Norolls" name="Norolls[`+numIncreament+`]">
//             </div>
//         <div class="col-md-2 mt-3">
//             <input type="number" class="form-control unit_price" name="unit_price[`+numIncreament+`]">
//         </div>
//         <div class="col-md-2 mt-3">
//             <input type="number" class="form-control quantity" name="quantity[`+numIncreament+`]">
//         </div>
//         <div class="col-md-2 mt-3">
//             <input type="number" class="price form-control" name="price[`+numIncreament+`]">
//         </div>
//             <div class="col-md-1 mt-3 d-none">
//
//                 <button type="reset" class="btn btn-primary" id="inputPassword5">Reset</button>
//             </div>
//             <div class="col-md-1 mt-3 del">
//                 <button type="button" class="btn btn-danger" id="inputPassword5">Delete</button>
//             </div>
//
//         </div>`));
//
//
//
//
//     })
//     $('.pickadate').pickadate({
//         format: 'yyyy-mm-dd',
// selectMonth:true,
//         selectYear:true,
//         clear:true,
//         closeOnSelect:true
//     });
//
//     $('#invoice_details').on('submit',function (e) {
//         $('select.supplier').each(function () {$(this).rules('add',{required:true})})
//         $('input.material').each(function () {$(this).rules('add',{required:true})})
//         $('input.Norolls').each(function () {$(this).rules('add',{required:true})})
//         $('input.unit_price').each(function () {$(this).rules('add',{required:true})})
//         $('input.quantity').each(function () {$(this).rules('add',{required:true})})
//         $('input.price').each(function () {$(this).rules('add',{required:true})})
//         $('input.date').each(function () {$(this).rules('add',{required:true})})
//     })
//
//     $('#invoice_details').validate({
//        rules: {
//            'invoice_number' :{required:true},
//            'date' :{required:true},
//            'material' :{required:true},
//            'Norolls' :{required:true},
//            'unit_price' :{required:true},
//            'quantity' :{required:true},
//            'price' :{required:true},
//            'supplier_id' :{required:true},
//        },
//         submitHandler:function (form) {
//             form.submit();
//         }
//     });
//
// });
//
