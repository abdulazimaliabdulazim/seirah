import React, { useState, useEffect } from "react";

const DynamicForms = () => {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    // قراءة البيانات من localStorage عند تحميل المكون
    const storedData = JSON.parse(localStorage.getItem("formData"));
    if (storedData) {
      setForms(storedData);
    }
  }, []);

  const addForm = () => {
    // إضافة نموذج جديد
    const newForm = {
      data: "",
    };

    // تحديث الحالة لتضمين النموذج الجديد
    setForms([...forms, newForm]);
  };

  const handleInputChange = (index, value) => {
    // تحديث قيمة الحقل النصي للنموذج الخاص بالفهرس المعطى
    const updatedForms = [...forms];
    updatedForms[index].data = value;
    setForms(updatedForms);
  };

  const handleDelete = (index) => {
    // حذف النموذج بناءً على الفهرس المعطى
    const updatedForms = forms.filter((form, i) => i !== index);
    setForms(updatedForms);
  };

  const handleSubmit = () => {
    // يمكنك هنا إجراء أي عمليات إضافية على البيانات قبل التخزين في localStorage
    console.log("تم تقديم النماذج:", forms);

    // تحديث localStorage
    localStorage.setItem("formData", JSON.stringify(forms));
  };

  return (
    <div>
      <button onClick={addForm}>إضافة نموذج</button>

      {forms.map((form, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="أدخل بياناتك"
            value={form.data}
            onChange={(e) => handleInputChange(index, e.target.value)}
          />

          <button onClick={() => handleDelete(index)}>حذف</button>
        </div>
      ))}

      <button onClick={handleSubmit}>حفظ البيانات</button>
    </div>
  );
};

export default DynamicForms;
